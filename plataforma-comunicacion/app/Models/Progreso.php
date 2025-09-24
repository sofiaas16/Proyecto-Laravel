<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Progreso extends Model
{
    protected $fillable = ['user_id', 'leccion_id'];

    public function leccion()
    {
        return $this->belongsTo(Leccion::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
