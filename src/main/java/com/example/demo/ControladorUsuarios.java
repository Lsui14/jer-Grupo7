package com.example.demo;

import java.io.File;
import java.io.Writer;
import java.io.BufferedWriter;
import java.io.*;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")

public class ControladorUsuarios {
	
	List<Usuario> listaUsuarios = new ArrayList(); 
	
	String usersFileURL = "src/main/resources/static/users.txt";
    String tempUsersFileURL = "src/main/resources/static/tempUsers.txt";
    
    public ControladorUsuarios()
    {

    	try {
    	      File myObj = new File(usersFileURL);
    	      Scanner myReader = new Scanner(myObj);
    	      
    	      while (myReader.hasNextLine()) 
    	      {
    	        String data[] = myReader.nextLine().split(";");
    	        Usuario auxUser = new Usuario(data[0], data[1]);
    	        
    	        listaUsuarios.add(auxUser);
    	      }
    	      
    	      myReader.close();
    	      
    	    } catch (FileNotFoundException e) {
    	      System.out.println("An error occurred reading the users.");
    	      e.printStackTrace();
    	    }
    }

	
	@GetMapping("/usuario")
	public List<Usuario> devolverUsuarios() {
		return listaUsuarios; 
	}

	
	@GetMapping("/usuario/{id}/{password}")
	public ResponseEntity<Usuario> devolverUsuario(@PathVariable String id,@PathVariable String password ) {
		
		Usuario u; 
		for(int i = 0; i<listaUsuarios.size(); i++) {
			u = listaUsuarios.get(i);
			if(id.equals(u.getId())&&password.equals(u.getPassword())) {
				return new ResponseEntity<>(u, HttpStatus.OK);
			}
			
		}
		
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		 
		
	}
	
	@PostMapping("/usuario")
	public ResponseEntity<Usuario> addUsuario(@RequestBody Usuario usuario) {
		
		
		
		    
		        	if(usuario.getId().length() == 0 || usuario.getPassword().length() == 0) {
		        		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		        	}

		            Usuario u; 
		    		for(int i = 0; i<listaUsuarios.size(); i++) {
		    			
	    			u = listaUsuarios.get(i);
		    			if(usuario.getId().equals(u.getId()) ) {
		    				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		    			}
		    			
		    		}
		    		
		    		try (Writer writer = new BufferedWriter(new FileWriter(usersFileURL, true))) // "true" parameter is for appending
		            {
		                String contents = "";
		                contents = usuario.getId() + ";" + usuario.getPassword() + ";"  + System.getProperty("line.separator");
		                
		                writer.write(contents);
		                writer.close();
		                System.out.println("User written succesfully");
		                
		            } catch (IOException e) {
		                e.printStackTrace();
		                System.out.println("Error writing user");
		            }
		    		
		    		listaUsuarios.add(usuario); 
		    		System.out.println(usuario);
		    		return new ResponseEntity<>(usuario, HttpStatus.OK);

		        
		    
		

		
	}
	
	@PutMapping("/usuario/{id}")
	public ResponseEntity<Usuario> actualizaUsuario(@PathVariable String id, @RequestBody Usuario usuarioActualizado) throws IOException{
		
		if(usuarioActualizado.getId().length() == 0 || usuarioActualizado.getPassword().length() == 0) {
    		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    	}
		
		File inputFile = new File(usersFileURL);
		File tempFile = new File(tempUsersFileURL);
		
		BufferedReader reader = new BufferedReader(new FileReader(inputFile));
		BufferedWriter writer = new BufferedWriter(new FileWriter(tempFile));
		
		Usuario u; 
		for(int i = 0; i<listaUsuarios.size(); i++) {
			u = listaUsuarios.get(i);
			if(id.equals(u.getId())) {
				String lineToUpdate = u.getId() + ";" + u.getPassword() + ";";
				u.setId(usuarioActualizado.getId());
				u.setPassword(usuarioActualizado.getPassword());
				
				String currentLine;
				
				while ((currentLine = reader.readLine()) != null) {
					String trimmedLine = currentLine.trim();

					if (trimmedLine.equals(lineToUpdate))
					{
						writer.write(u.getId() + ";" + u.getPassword() + ";" + System.getProperty("line.separator"));
						continue;
					}
						

					writer.write(currentLine + System.getProperty("line.separator"));
				}
				writer.close();
				reader.close();

				inputFile.delete();
				boolean successful = tempFile.renameTo(inputFile);
				return new ResponseEntity<>(u, HttpStatus.OK);
			}			
		}
		
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		 	
	}
	
	
	@DeleteMapping(value="/usuario/{id}/{password}")
	public ResponseEntity<Usuario> borrarUsuario(@PathVariable String id, @PathVariable String password) throws IOException{
	
		Usuario u; 
		for(int i = 0; i<listaUsuarios.size(); i++) {
			u = listaUsuarios.get(i);
			if(id.equals(u.getId()) && password.equals(u.getPassword())) {
				listaUsuarios.remove(u);
				
				   
				   File inputFile = new File(usersFileURL);
				   File tempFile = new File(tempUsersFileURL);

				   BufferedReader reader = new BufferedReader(new FileReader(inputFile));
				   BufferedWriter writer = new BufferedWriter(new FileWriter(tempFile));

				   String lineToRemove = u.getId() + ";" + u.getPassword() + ";";
				   String currentLine;

				   while((currentLine = reader.readLine()) != null) {
				       String trimmedLine = currentLine.trim();
				       
				       if(trimmedLine.equals(lineToRemove)) 
				    	   continue;
				       
				       writer.write(currentLine + System.getProperty("line.separator"));
				   }
				   writer.close(); 
				   reader.close();
				   
				   inputFile.delete();
				   boolean successful = tempFile.renameTo(inputFile);
				
				return new ResponseEntity<>(u, HttpStatus.OK);
			}			
		}
		
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		 	
		
	}
	

}

