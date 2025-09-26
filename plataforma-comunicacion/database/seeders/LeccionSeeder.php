<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Leccion;

class LeccionSeeder extends Seeder
{
    public function run(): void
    {
        for ($i = 1; $i <= 10; $i++) {
            Leccion::create([
                'titulo' => "Leccion Falsa $i",
                'contenido' => "Contenido de la leccion falsa numero $i"
            ]);
        }
    }
}
