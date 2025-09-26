<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    public function run()
    {
        // Busca si ya existe el admin
        $admin = User::where('email', 'adrian@gmail.com')->first();

        if (!$admin) {
            $admin = User::create([
                'name' => 'Adrian',
                'email' => 'adrian@gmail.com',
                'password' => Hash::make('password123'), // Cambia luego
                'is_admin' => true, // si tienes columna is_admin
            ]);
        }

        // Crea el token Sanctum
        $token = $admin->createToken('AdminToken')->plainTextToken;

        // Opcional: imprime el token en consola
        $this->command->info("Token de Admin: $token");
    }
}
