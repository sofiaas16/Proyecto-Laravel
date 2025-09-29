<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DeleteCardRequest extends FormRequest
{
    public function authorize(): bool
    {
        // aquí podrías validar que el usuario sea admin
        return $this->user() && $this->user()->role === 'admin';
    }

    public function rules(): array
    {
        return [];
    }
}
