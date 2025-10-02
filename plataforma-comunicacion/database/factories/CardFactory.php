<?php

namespace Database\Factories;

use App\Models\Card;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class CardFactory extends Factory
{
    protected $model = Card::class;

    public function definition()
    {
        return [
            'uuid' => Str::uuid(),
            'image' => $this->faker->imageUrl(640, 480, 'education'), // URL de imagen falsa
            'key_phrase' => $this->faker->words(3, true), // frase corta
            'translations' => json_encode([
                'es' => $this->faker->sentence(),
                'en' => $this->faker->sentence(),
            ]),
            'audio_files' => json_encode([
                'es' => $this->faker->word() . '.mp3',
                'en' => $this->faker->word() . '.mp3',
            ]),
            'method' => $this->faker->randomElement(['visual', 'auditivo', 'tactil']),
            'difficulty' => $this->faker->randomElement(['easy', 'medium', 'hard']),

        ];
    }
}
