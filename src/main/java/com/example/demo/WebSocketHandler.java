package com.example.demo;


import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;



public class WebSocketHandler extends TextWebSocketHandler {

	private Map<String, WebSocketSession> sessions = new ConcurrentHashMap<>();
	private ObjectMapper mapper = new ObjectMapper();
	private WebSocketSession sessionJ1 = null, sessionJ2 = null;
	private int maxUsers = 2; 
	
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		System.out.println("New user: " + session.getId());
		sessions.put(session.getId(), session);
		Long activeUsers = ((ConcurrentHashMap<String, WebSocketSession>) sessions).mappingCount();
		assignPlayer( session, activeUsers);
	}
	
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		System.out.println("Session closed: " + session.getId());
		sessions.remove(session.getId());
		Long activeUsers = ((ConcurrentHashMap<String, WebSocketSession>) sessions).mappingCount();
		if(activeUsers < 2) {
		ObjectNode newNode = mapper.createObjectNode();
        newNode.put("name", "Desconectado");
        newNode.put("destiny", "Se ha desconectado un jugador");
        sendMessageToAll(newNode);
		}
		
	}
	
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		//System.out.println("Message received: " + message.getPayload());
        //JsonNode node = mapper.readTree(message.getPayload());

        try {
            JsonNode node = mapper.readTree(message.getPayload());

            if(node.get("destiny").asText().equals("Other")) {
                sendOtherParticipants(session, node);
            }
            if(node.get("destiny").asText().equals("All")) {
                sendMessageToAll(node);
            }

        } catch (Exception e) {
            System.out.println("Error: " + e);
        }
        //sendMessageToAll(node);


        //sendOtherParticipants(session, node);
	}
	
	public void sendMessageToAll(JsonNode node){
		//System.out.println("Message sent: " + node.toString());
		
		try {
			for(WebSocketSession participant : sessions.values()) {
				synchronized(participant) {
					participant.sendMessage(new TextMessage(node.toString()));
				}
			}
		
		} catch (Exception e) {
			System.out.println("Error: " + e);
		}
	}

	private void sendOtherParticipants(WebSocketSession session, JsonNode node) throws IOException {

		ObjectNode newNode = mapper.createObjectNode();
        if(node.get("name").asText().equals("Move")|| node.get("name").asText().equals("Gato") || node.get("name").asText().equals("Bola")) {
            newNode.put("name", node.get("name").asText());
            //newNode.put("destiny", node.get("destiny").asText());
            newNode.put("posx", node.get("posx").asDouble());
            newNode.put("posy", node.get("posy").asDouble());
            
        }
        
        else if(node.get("name").asText().equals("Conectado")) {
            newNode.put("name", node.get("name").asText());
            newNode.put("destiny", node.get("destiny").asText());
            newNode.put("usuario", node.get("usuario").asText());
        }
        
        else if(node.get("name").asText().equals("Pausa") || node.get("name").asText().equals("Play")) {
            newNode.put("name", node.get("name").asText());
            newNode.put("destiny", node.get("destiny").asText());
            System.out.println("Message sent: " + node.toString());
        }
        else {


        newNode.put("name", node.get("name").asText());
        newNode.put("destiny", node.get("destiny").asText());
        newNode.put("posx", node.get("posx").asDouble());
        newNode.put("posy", node.get("posy").asDouble());
        newNode.put("move", node.get("move").asBoolean());
        newNode.put("touch", node.get("touch").asBoolean());
        newNode.put("velocity", node.get("velocity").asDouble());
        newNode.put("numBolas", node.get("numBolas").asInt());

        //System.out.println("Message sent: " + node.toString());
        }



        for(WebSocketSession participant : sessions.values()) {
            if(!participant.getId().equals(session.getId())) {
                participant.sendMessage(new TextMessage(newNode.toString()));
            }
        }
	}
	
	private void assignPlayer (WebSocketSession session, Long activeUsers){
		
		if(activeUsers <= maxUsers) {
		
			int num = -1;
			if(activeUsers == 1) {
				sessionJ1 = session;
				num = 1;
			}
			else if (activeUsers == 2) {
				sessionJ2 = session;
				num = 2;
			}
			
			if(sessionJ1 != null) {
				System.out.println("Player 1: " + sessionJ1.getId());
			}
			if(sessionJ2 != null) {
				System.out.println("Player 2: " + sessionJ2.getId());
			}
			
			ObjectNode player = mapper.createObjectNode();
			player.put("name", "Numero Jugador Asignado");
			player.put("message", num);
			
			try {
				session.sendMessage(new TextMessage(player.toString()));
			
			} catch (Exception e) {
				System.out.println("Error: " + e);
			}
			
		} else {
			System.out.println("Sala Llena");
			
			ObjectNode player = mapper.createObjectNode();
			player.put("name", "Sala Llena");
			
			try {
				session.sendMessage(new TextMessage(player.toString()));
			
			} catch (Exception e) {
				System.out.println("Error: " + e);
			}
			
		}
	}

}
