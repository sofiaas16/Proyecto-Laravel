<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Card;

class CardSeeder extends Seeder
{
    public function run()
    {
        Card::truncate(); // limpia la tabla antes de crear
        Card::factory()->count(10)->create(); // crea 10 tarjetas falsas
    }
}
