<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
    use HasFactory;

    // Campos que se pueden asignar masivamente
    protected $fillable = [
        'uuid',
        'image',
        'key_phrase',
        'translations',
        'audio_files',
        'method',
    ];

    // Si quieres, puedes agregar casting de JSON para translations y audio_files
    protected $casts = [
        'translations' => 'array',
        'audio_files' => 'array',
    ];
}
