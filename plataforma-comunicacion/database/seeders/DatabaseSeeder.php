<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Llamamos al seeder de roles
        $this->call([
            RoleSeeder::class,
            UserSeeder::class,    // Usuarios normales
            CardSeeder::class,    // Tarjetas
        ]);
        
        
    }
}
