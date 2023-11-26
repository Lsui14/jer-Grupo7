class FightScene extends Phaser.Scene 
{
    constructor()
    {
        super();
    }
    
    preload ()
    {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('escenario', 'assets/escenario.jpg');
        this.load.image('suelo', 'assets/platform.png');
        //this.load.image('star', 'assets/star.png');
        //this.load.image('bomb', 'assets/bomb.png');
        this.load.spritesheet('magorojo', 'assets/mago1Sprites.png', { frameWidth: 82, frameHeight: 144 });
        this.load.spritesheet('magorojosalto', 'assets/mago1Salto.png', { frameWidth: 82, frameHeight: 110 });
        this.load.spritesheet('magomorado', 'assets/mago2Sprites.png', { frameWidth: 82, frameHeight: 110 });
    }
    
    create ()
    {
        this.add.image(450, 253, 'escenario');
        platform = this.physics.add.staticGroup();
    
        platform.create(450, 480, 'suelo');
    
        
    
        player1 = this.physics.add.sprite(200,350, 'magorojo');
        player2 = this.physics.add.sprite(700,400, 'magomorado');
        
    
        player1.setBounce(0.1);
        player1.setCollideWorldBounds(true);
        player1.body.setGravityY(300);
    
        player2.setBounce(0.1);
        player2.setCollideWorldBounds(true);
        player2.body.setGravityY(300);
    
        
    
        this.physics.add.collider(player1, platform);
        this.physics.add.collider(player2, platform);
        this.physics.add.collider(player2, player1);
    
        this.anims.create({
            key: 'rojo left',
            frames: this.anims.generateFrameNumbers('magorojo', { start: 6, end: 9}),
            frameRate: 10,
            repeat: -1
        });
    
        this.anims.create({
            key: 'rojo turn left',
            frames: [{ key: 'magorojo', frame: 5}],
            frameRate: 20
        });
    
        this.anims.create({
            key: 'rojo turn right',
            frames: [{ key: 'magorojo', frame: 4}],
            frameRate: 20
        });
    
        this.anims.create({
            key: 'rojo right',
            frames: this.anims.generateFrameNumbers('magorojo', { start: 0, end: 3}),
            frameRate: 10,
            repeat: -1
        });
    
        this.anims.create({
            key: 'rojo jump right',
            frames: [{key: 'magorojo', frame: 10}],
            framRate: 20,
            repeat: -1
    
        })
    
        this.anims.create({
            key: 'rojo jump left',
            frames: [{key: 'magorojo', frame: 13}],
            framRate: 20,
            repeat: -1
    
        })
    
        this.anims.create({
            key: 'morado left',
            frames: this.anims.generateFrameNumbers('magomorado', { start: 6, end: 9}),
            frameRate: 10,
            repeat: -1
        });
    
        this.anims.create({
            key: 'morado turn left',
            frames: [{ key: 'magomorado', frame: 5}],
            frameRate: 20
        });
    
        this.anims.create({
            key: 'morado turn right',
            frames: [{ key: 'magomorado', frame: 4}],
            frameRate: 20
        });
    
        this.anims.create({
            key: 'morado right',
            frames: this.anims.generateFrameNumbers('magomorado', { start: 0, end: 3}),
            frameRate: 10,
            repeat: -1
        });
    
        this.anims.create({
            key: 'morado jump right',
            frames: [{ key: 'magomorado', frame: 10}],
            framRate: 20,
            
    
        })
    
        this.anims.create({
            key: 'morado jump left',
            frames: [{ key: 'magomorado', frame: 13}],
            framRate: 20,
            
    
        })
    
        //cursors = this.input.keyboard.createCursorKeys();
        const keyCodes= Phaser.Input.Keyboard.KeyCodes;
        this.teclaA= this.input.keyboard.addKey(keyCodes.A);
        this.teclaD= this.input.keyboard.addKey(keyCodes.D);
        this.teclaW= this.input.keyboard.addKey(keyCodes.W);
        this.teclaJ= this.input.keyboard.addKey(keyCodes.J);
        this.teclaL= this.input.keyboard.addKey(keyCodes.L);
        this.teclaI= this.input.keyboard.addKey(keyCodes.I);
        //this.teclaE = this.input.keyboard.addKey(keyCodes,E);
        //this.teclaO = this.input.keyboard.addKey(keyCodes,O);
        //const teclas = this.input.keyboard.keycodes;
        //this.teclasA = this.input.keyboard.addKey(teclas.a);
    
    
    }
    
    update ()
    {
        if(this.teclaW.isDown && player1.body.touching.down && derecha){
            player1.setVelocityY(-400);
            player1.anims.play('rojo jump right', true);
        }
    
        else if(this.teclaW.isDown && player1.body.touching.down && !derecha){
            player1.setVelocityY(-400);
            player1.anims.play('rojo jump left', true);
        }
        else if(this.teclaA.isDown){
            player1.setVelocityX(-260);
    
            if(player1.body.touching.down){
            player1.anims.play('rojo left', true);
            }
            else{
                player1.anims.play('rojo jump left', true);
            }
            derecha = false;
        }
    
        else if(this.teclaD.isDown){
            player1.setVelocityX(260);
    
            if(player1.body.touching.down){
            player1.anims.play('rojo right', true);
            }
            else{
                player1.anims.play('rojo jump right', true);
            }
            derecha = true;
        }
    
        else if(derecha == true){
            player1.setVelocityX(0);
    
            if(player1.body.touching.down){
            player1.anims.play('rojo turn right');
            }
        }
    
        else{
            player1.setVelocityX(0);
    
            if(player1.body.touching.down){
            player1.anims.play('rojo turn left');
            }
        }
    
        
    
        
        if(this.teclaI.isDown && player2.body.touching.down && derecha2){
            player2.setVelocityY(-500);
            player2.anims.play('morado jump right', true);
        }
    
        else if(this.teclaI.isDown && player2.body.touching.down && !derecha2){
            player2.setVelocityY(-500);
            player2.anims.play('morado jump left', true);
        }
    
        else if(this.teclaJ.isDown){
            player2.setVelocityX(-260);
    
            if(player2.body.touching.down){
            player2.anims.play('morado left', true);
            }
            else{
                player2.anims.play('morado jump left', true);
            }
            derecha2 = false;
        }
    
        else if(this.teclaL.isDown){
            player2.setVelocityX(260);
    
            if(player2.body.touching.down){
            player2.anims.play('morado right', true);
            
            }
            else{
                player2.anims.play('morado jump right', true);
            }
            derecha2 = true;
    
            
        }
    
        else if(derecha2 == true){
            player2.setVelocityX(0);
    
            if(player2.body.touching.down){
            player2.anims.play('morado turn right');
            }
        }
    
        else{
            player2.setVelocityX(0);
    
            if(player2.body.touching.down){
            player2.anims.play('morado turn left');
            }
        }
    }    

}

var config = {
    type: Phaser.AUTO,
    width: 900,
    height: 506,
    physics:{
        default: 'arcade',
        arcade:{
            gravity: { y: 300},
            debug: false
        }
    },
    scene: FightScene
};

var game = new Phaser.Game(config);
var player1;
var player2;
var platform;
var derecha = true;
var derecha2 = false;
