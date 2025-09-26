<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\User;
use App\Models\Leccion;

class ProgresoRequest extends FormRequest
{
    public function authorize()
    {
        return auth()->user() && auth()->user()->role->name === 'admin';
    }

    public function rules()
    {
        return [
            'user_id' => 'required|exists:users,id',
            'leccion_id' => 'required|exists:lecciones,id'
        ];
    }

    public function messages()
    {
        return [
            'user_id.required' => 'El usuario es obligatorio.',
            'user_id.exists' => 'El usuario no existe.',
            'leccion_id.required' => 'La lección es obligatoria.',
            'leccion_id.exists' => 'La lección no existe.'
        ];
    }
}
