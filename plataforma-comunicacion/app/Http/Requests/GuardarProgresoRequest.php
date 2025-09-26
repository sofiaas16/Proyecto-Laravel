<?php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class GuardarProgresoRequest extends FormRequest
{
    public function authorize() {
        return true;
    }

    public function rules() {
        return [
            'lecciones_completadas' => 'required|array'
        ];
    }

    protected function failedValidation(Validator $validator) {
        throw new HttpResponseException(
            response()->json([
                'status' => 'error',
                'message' => 'Datos invalidos lecciones_completadas',
                'errors' => $validator->errors()
            ], 422)
        );
    }
}
