<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Card;

class CardSeeder extends Seeder
{
    public function run()
    {
<<<<<<< HEAD
        $cards = [
            // Salud y cortesía
            ['Hola', 'visual', 'hola.png', ['es'=>'Hola','en'=>'Hello'], ['es'=>'hola.mp3','en'=>'hello.mp3']],
            ['Adiós', 'visual', 'adios.png', ['es'=>'Adiós','en'=>'Goodbye'], ['es'=>'adios.mp3','en'=>'goodbye.mp3']],
            ['Gracias', 'auditivo', 'gracias.png', ['es'=>'Gracias','en'=>'Thank you'], ['es'=>'gracias.mp3','en'=>'thankyou.mp3']],
            ['Por favor', 'auditivo', 'porfavor.png', ['es'=>'Por favor','en'=>'Please'], ['es'=>'porfavor.mp3','en'=>'please.mp3']],

            // Sí y No (fundamentales)
            ['Sí', 'visual', 'si.png', ['es'=>'Sí','en'=>'Yes'], ['es'=>'si.mp3','en'=>'yes.mp3']],
            ['No', 'visual', 'no.png', ['es'=>'No','en'=>'No'], ['es'=>'no.mp3','en'=>'no.mp3']],

            // Necesidades básicas
            ['Comer', 'visual', 'comer.png', ['es'=>'Comer','en'=>'Eat'], ['es'=>'comer.mp3','en'=>'eat.mp3']],
            ['Beber', 'visual', 'beber.png', ['es'=>'Beber','en'=>'Drink'], ['es'=>'beber.mp3','en'=>'drink.mp3']],
            ['Baño', 'visual', 'bano.png', ['es'=>'Baño','en'=>'Bathroom'], ['es'=>'bano.mp3','en'=>'bathroom.mp3']],
            ['Dormir', 'tactil', 'dormir.png', ['es'=>'Dormir','en'=>'Sleep'], ['es'=>'dormir.mp3','en'=>'sleep.mp3']],

            // Emociones
            ['Feliz', 'visual', 'feliz.png', ['es'=>'Feliz','en'=>'Happy'], ['es'=>'feliz.mp3','en'=>'happy.mp3']],
            ['Triste', 'visual', 'triste.png', ['es'=>'Triste','en'=>'Sad'], ['es'=>'triste.mp3','en'=>'sad.mp3']],
            ['Enojado', 'visual', 'enojado.png', ['es'=>'Enojado','en'=>'Angry'], ['es'=>'enojado.mp3','en'=>'angry.mp3']],
            ['Cansado', 'auditivo', 'cansado.png', ['es'=>'Cansado','en'=>'Tired'], ['es'=>'cansado.mp3','en'=>'tired.mp3']],
        ];

        foreach ($cards as $c) {
            Card::create([
                'uuid' => Str::uuid(),
                'key_phrase' => $c[0],
                'method' => $c[1],
                'image' => $c[2],
                'translations' => json_encode($c[3]),
                'audio_files' => json_encode($c[4]),
            ]);
        }
=======
        Card::truncate(); // limpia la tabla antes de crear
        Card::factory()->count(10)->create(); // crea 10 tarjetas falsas
>>>>>>> danilo
    }
}
