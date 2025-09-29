<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    public function run()
    {
        $admin = User::firstOrCreate(
            ['email' => 'adrian@gmail.com'],
            [
                'name' => 'Adrian',
                'password' => Hash::make('campus2023'),
                'is_admin' => true
            ]
        );
        
        // Borra tokens antiguos y crea uno fijo
        $admin->tokens()->delete();
        $token = $admin->createToken('admin-token')->plainTextToken;
        
        $this->command->info("Token de Admin real: $token");
    }
}
