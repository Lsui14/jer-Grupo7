var LogIn = new Phaser.Class({


    Extends: Phaser.Scene,

    initialize:

        function Menu() {
            Phaser.Scene.call(this, { key: 'LogIn' });
        },

        preload(){
            
            this.load.image('fondologin', 'interfaces/interfaz_iniciosesion.jpg');
            this.load.image('log', 'interfaces/input_blanco.png');
            this.load.spritesheet('registrar', 'interfaces/boton_registrar.png',  { frameWidth: 260, frameHeight: 105 });
            this.load.spritesheet('iniciar', 'interfaces/boton_iniciar.png',  { frameWidth: 260, frameHeight: 105 });
            this.load.audio('pulsado','musica/Pulsado.mp3');
            this.load.audio('boton','musica/Hover.mp3');
            this.load.audio('musicafondo','musica/musica_ascensor.mp3');
        },

        create(){
            this.add.image(450,253,'fondologin');
            valor = '';
            valor2 = '';
            var escribir = false;
            var escribirpassword = false;
            this.fondo = this.add.image(450,253, 'fondologin').setInteractive();
            this.login = this.add.image(400,220, 'log').setScale(0.3).setInteractive();
            this.password = this.add.image(400, 340, 'log').setScale(0.3).setInteractive();
            this.registrar = this.add.sprite(565, 430, 'registrar').setInteractive();
            this.get = this.add.sprite(355, 430, 'iniciar').setInteractive();
            const textEntry = this.add.text(280, 205, '', { font: '30px Courier', fill: '#5c330a' });
            const passEntry = this.add.text(280, 325, '', { font: '30px Courier', fill: '#5c330a' });
            
            const informacion = this.add.text(250, 370, '', { font: '20px Courier', fill: '#5c330a' , weight: 23});

            const error = this.add.text(350, 370, '', { font: '20px Courier', fill: '#b81414' , weight: 23});
            const error2 = this.add.text(295, 370, '', { font: '20px Courier', fill: '#b81414', weight: 3 });
            
            pulsar = this.sound.add('pulsado');
            boton = this.sound.add('boton');
            
            musicafondo = this.sound.add('musicafondo'); 
            musicafondo.setVolume(0.5);
            musicafondo.play();
        
            var ip = location.host;

            function createUsuario(usuario) {
                $.ajax({
                    method: "POST",
                    url: 'http://'+ ip + '/usuario',
                    data: JSON.stringify(usuario),
                    processData: false,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).done(function (usuario) {
                    console.log("Usuario registrado: " + JSON.stringify(usuario));
                    informacion.text = 'Usuario registrado, puede iniciar'; 
                }).fail(function(){
                    console.log("Usuario ya existente");
                    console.log(ip);
                    error.text = 'Usuario ya en uso';
                    
                });
            }

            function loadUsuario(usuario) {
                $.ajax({
                    
                    url: 'http://'+ ip + '/usuario/' + usuario.id + "/" + usuario.password,
                    
                }).done(function (usuario) {
                    console.log('Usuario iniciado: ' + JSON.stringify(usuario));
                    game.usuario = usuario;
                    game.scene.start('Menu');
                    musicafondo.stop();
                    passEntry.text="";
                    textEntry.text = "";
                }).fail(function(){
                    console.log("Usuario o clave incorrecta o no se ha registrado");
                    error2.text = 'Usuario o clave incorrecta'
                });
            }

            $(document).ready(function () {
                
            })

            this.registrar.on('pointerover', () => {
                boton.play();
                this.registrar.setFrame(1);
            });


            this.registrar.on('pointerout', () => {
                this.registrar.setFrame(0);
            });


            this.registrar.on('pointerdown', function () {
            
                error.text= ''; 
                error2.text= ''; 
                informacion.text= ''; 

                var n = valor;
                var p = valor2;
        
                
                if(n.length >0 && p.length > 0){
                    console.log("si")
                var usuario = {
                id: n,
                password: p
                }
        
                createUsuario(usuario);
            }

            else{
                error2.text = 'Rellene el nombre y la clave'
            }
                
            })

            this.get.on('pointerover', () => {
                boton.play();
                this.get.setFrame(1);
            });

            this.get.on('pointerout', () => {
                this.get.setFrame(0);
            });

            this.get.on('pointerdown', function(){
                error.text= ''; 
                error2.text= ''; 
                informacion.text= ''; 

                var n = valor;
                var p = valor2;
        
                
        
                var usuario = {
                id: n,
                password: p
                }

                loadUsuario(usuario);
                
            })

            this.login.on('pointerdown', () => {
                escribir = true;
                escribirpassword = false;
                error.text= ''; 
                error2.text= ''; 
                informacion.text= ''; 
                
               });

            this.fondo.on('pointerdown', () =>{
                escribir = false;
                escribirpassword = false;
                error.text= ''; 
                error2.text= ''; 
                informacion.text= ''; 
            });

            this.password.on('pointerdown', () =>{
                escribirpassword = true;
                escribir = false;
                error.text= ''; 
                error2.text= ''; 
                informacion.text= ''; 
            })


               
                    this.input.keyboard.on('keydown', event =>
                {

                    if (event.keyCode === 8 && textEntry.text.length > 0 && escribir)
                    {
                        textEntry.text = textEntry.text.substr(0, textEntry.text.length - 1);
                        valor = textEntry.text;
                    }
                    else if ((event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode < 90)) && textEntry.text.length < 10 && escribir)
                    {
                        
                        textEntry.text += event.key;
                        valor = textEntry.text;
                    }

                    else if(event.keyCode === 8 && passEntry.text.length > 0 && escribirpassword){
                        passEntry.text = passEntry.text.substr(0, passEntry.text.length - 1);
                        valor2 = valor2.substr(0, valor2.length - 1);
                    }

                    else if ((event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode < 90)) && passEntry.text.length < 10 && escribirpassword)
                    {
                        
                        passEntry.text += '*';
                        valor2 += event.key;
                    }

                });
            
        },

        update(){
            
        }





})