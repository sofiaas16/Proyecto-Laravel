<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
    use HasFactory;

    protected $fillable = [
        'uuid',
        'image',
        'key_phrase',
        'translations',
        'audio_files',
        'method',
        'language',     
        'difficulty',   
    ];

    protected $casts = [
        'translations' => 'array',
        'audio_files' => 'array',
    ];
}
