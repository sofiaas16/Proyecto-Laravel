<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Card;
use Illuminate\Support\Str;

class CardSeeder extends Seeder
{
    public function run(): void
    {
        $cards = [
            ['Hola', 'visual', 'hola.png', ['es'=>'Hola','en'=>'Hello'], ['es'=>'hola.mp3','en'=>'hello.mp3']],
            ['Adiós', 'auditivo', 'adios.png', ['es'=>'Adiós','en'=>'Goodbye'], ['es'=>'adios.mp3','en'=>'goodbye.mp3']],
            ['Gracias', 'tactil', 'gracias.png', ['es'=>'Gracias','en'=>'Thank you'], ['es'=>'gracias.mp3','en'=>'thankyou.mp3']],
            ['Sí', 'visual', 'si.png', ['es'=>'Sí','en'=>'Yes'], ['es'=>'si.mp3','en'=>'yes.mp3']],
            ['No', 'auditivo', 'no.png', ['es'=>'No','en'=>'No'], ['es'=>'no.mp3','en'=>'no.mp3']],
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
    }
}
