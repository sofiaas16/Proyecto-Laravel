<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LeccionRequest extends FormRequest
{
    public function authorize()
    {
        return auth()->user() && auth()->user()->role->name === 'admin';
    }

    public function rules()
    {
        return [
            'titulo' => 'required|string|max:255',
            'contenido' => 'nullable|string'
        ];
    }

    public function messages()
    {
        return [
            'titulo.required' => 'El título de la lección es obligatorio.',
            'titulo.string' => 'El título debe ser un texto.',
            'titulo.max' => 'El título no puede tener más de 255 caracteres.',
            'contenido.string' => 'El contenido debe ser un texto.'
        ];
    }
}
