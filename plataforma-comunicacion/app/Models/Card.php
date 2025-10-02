<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'lenguage',
        'comunication_method',
        'difficulty',
        'uuid',
        'image',
        'key_phrase',
        'translations',
        'audio_files',
        'method',
    ];

    protected $casts = [
        'translations' => 'array',
        'audio_files' => 'array',
    ];

}
