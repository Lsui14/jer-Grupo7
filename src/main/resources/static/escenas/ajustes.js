var Ajustes = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function Ajustes() {
            Phaser.Scene.call(this, { key: 'Ajustes' });
        },
    
    preload(){

        this.load.image('interfazAjustes', 'interfaces/interfaz_ajustes.jpg');

        this.load.audio('pulsado','musica/Pulsado.mp3');
        this.load.audio('boton','musica/Hover.mp3');

        this.load.spritesheet('audio_on', 'interfaces/audioon.png', { frameWidth: 180, frameHeight: 169 });
        this.load.spritesheet('audio_off', 'interfaces/audiooff.png',  { frameWidth: 180, frameHeight: 169 });
        this.load.spritesheet('flecha', 'interfaces/flecha.png',  { frameWidth: 164, frameHeight: 109 });
        this.load.spritesheet('actualizar', 'interfaces/boton_actualizar.png',  { frameWidth: 260, frameHeight: 105 });
        this.load.spritesheet('borrar', 'interfaces/boton_borrar.png',  { frameWidth: 260, frameHeight: 105 });
        this.load.image('log', 'interfaces/input_blanco.png');

    },
    
    create() {

      this.fondo = this.add.image(450,253,'interfazAjustes');
       pulsar = this.sound.add('pulsado');
       boton = this.sound.add('boton');

       escribirpassword = false;
      valor = '';
      nombre = game.usuario.id;

      const textEntry = this.add.text(200, 295, game.usuario.id, { font: '30px Courier', fill: '#5c330a' });


      this.password = this.add.image(310, 390, 'log').setScale(0.3).setInteractive();

      const passEntry = this.add.text(200, 375, '', { font: '30px Courier', fill: '#5c330a' });

      this.actualizar = this.add.sprite(650, 300, 'actualizar').setInteractive();

      this.borrar = this.add.sprite(650, 400, 'borrar').setInteractive();

      const informacionActualizar = this.add.text(210, 430, '', { font: '20px Courier', fill: '#5c330a' , weight: 23});

      const error = this.add.text(210, 430, '', { font: '20px Courier', fill: '#b81414' , weight: 23});


      var ip = location.host;

      function actualizarUsuario(usuario) {
        $.ajax({
            method: 'PUT',
            url: 'http://'+ ip + '/usuario/' + usuario.id,
            data: JSON.stringify(usuario),
            processData: false,
            headers: {
                "Content-Type": "application/json"
            }
        }).done(function (usuario) {
            game.usuario = usuario; 
            console.log("Clave actualizada: " + JSON.stringify(usuario))
            informacionActualizar.text = 'Clave actualizada';
          }).fail(function(){
            
            });
    }

    function deleteUsuario(usuario) {
      $.ajax({
          method: 'DELETE',
          url: 'http://'+ ip + '/usuario/' + usuario.id + "/" + usuario.password,
          
      }).done(function (usuario) {
          console.log("Usuario Borrado" + usuario.id)
          informacionActualizar.text = "Usuario borrado"; 
          game.scene.stop('Ajustes');
          game.scene.start('LogIn');
          game.musicaGlobal.musica.stop();
          game.musicaGlobal.musica = null;
          informacionActualizar.text = "";  
        }).fail(function(){
          console.log("Usuario o clave incorrecta o no se ha registrado");
          });
  }

  this.password.on('pointerdown', () =>{
    escribirpassword = true;
    informacionActualizar.text = ""; 
    error.text = ""; 

  })

  this.fondo.on('pointerdown', ()=>{
    escribirpassword = false;
    informacionActualizar.text = ""; 
    error.text = ""; 
  })

    this.actualizar.on('pointerover', () => {
      boton.play();
      this.actualizar.setFrame(1);
    });

    this.actualizar.on('pointerout', () => {
      boton.play();
      this.actualizar.setFrame(0);
    });

    this.actualizar.on('pointerdown', () => {
      error.text = ""; 
      informacionActualizar.text = ""; 
      escribirpassword = false
      pulsar.play();

      var n = game.usuario.id;
      var p = valor;

      if(n.length>0 && p.length>0){
      var usuario = {
        id: n,
        password: p

      }
      actualizarUsuario(usuario);
    } else{
      error.text= "Rellena la clave";
    }

    });

    this.borrar.on('pointerover', () => {
      boton.play();
      this.borrar.setFrame(1);
    });

    this.borrar.on('pointerout', () => {
      boton.play();
      this.borrar.setFrame(0);
    });

    this.borrar.on('pointerdown', () => {
      error.text = ""; 
      informacionActualizar.text = ""; 
      escribirpassword = false
      pulsar.play();

      var n = game.usuario.id;
      var p = game.usuario.password; 


      var usuario = {
        id: n,
        password:p,


      }
      deleteUsuario(usuario);
    
    });

       this.audioon = this.add.sprite(300, 120, 'audio_on').setInteractive();
       
       this.audioon.on('pointerover', () => {
        boton.play();
        this.audioon.setFrame(1);
      });
      this.audioon.on('pointerout', () => {
        this.audioon.setFrame(0);
      });
      this.audioon.on('pointerdown', () => {
        error.text = ""; 
        informacionActualizar.text = ""; 
        escribirpassword = false
        pulsar.play();
        this.game.musicaGlobal.musica.setVolume(0.5);
        this.game.musicaGlobal.mute = false;
      });


      this.audiooff = this.add.sprite(620, 120, 'audio_off').setInteractive();

      this.audiooff.on('pointerover', () => {
        boton.play();
        this.audiooff.setFrame(1);
      });
      this.audiooff.on('pointerout', () => {
        this.audiooff.setFrame(0);
      });
      this.audiooff.on('pointerdown', () => {
        error.text = ""; 
        informacionActualizar.text = ""; 
        escribirpassword = false
        pulsar.play();
        this.game.musicaGlobal.musica.setVolume(0);
        this.game.musicaGlobal.mute = true;
      });

      this.flecha = this.add.sprite(91, 66, 'flecha').setInteractive();

      this.flecha.on('pointerover', () => {
        boton.play();
        this.flecha.setFrame(1);
      });
      this.flecha.on('pointerout', () => {
        this.flecha.setFrame(0);
      });
      this.flecha.on('pointerdown', () => {
        error.text = ""; 
        informacionActualizar.text = ""; 
        escribirpassword = false
        pulsar.play();
        this.scene.start('Menu');
      });

      this.input.keyboard.on('keydown', event =>
      {

          if(event.keyCode === 8 && passEntry.text.length > 0 && escribirpassword){
              passEntry.text = passEntry.text.substr(0, passEntry.text.length - 1);
              valor = valor.substr(0, valor.length - 1);
          }

          else if ((event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode < 90)) && passEntry.text.length < 10 && escribirpassword)
          {

              passEntry.text += event.key;
              valor += event.key;
              console.log(valor);
          }

      });


    
    },

    update(){
       
    }
});