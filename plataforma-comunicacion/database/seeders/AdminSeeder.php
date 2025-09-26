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
        $admin = User::where('email', 'adrian@example.com')->first();

        if (!$admin) {
            $admin = User::create([
                'name' => 'Adrian',
                'email' => 'adrian@example.com',
                'password' => Hash::make('campus2023'),
                'is_admin' => true,
            ]);
        }

        // Crea el token Sanctum
        $token = $admin->createToken('AdminToken')->plainTextToken;

        $this->command->info("Token de Admin: $token");
    }
}
