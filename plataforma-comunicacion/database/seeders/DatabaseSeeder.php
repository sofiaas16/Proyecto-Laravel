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
        // Llamamos a cada seeder
        $this->call([
            RoleSeeder::class,
            UserSeeder::class,    // Usuarios normales
            CardSeeder::class,    // Tarjetas
            AdminSeeder::class,   // Admin predeterminado
        ]);
    }
}
