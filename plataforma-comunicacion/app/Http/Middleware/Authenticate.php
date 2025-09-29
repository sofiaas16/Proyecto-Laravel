<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;

class Authenticate extends Middleware
{
    protected function redirectTo($request)
    {
        if (! $request->expectsJson()) {
            // En lugar de redirigir a login, responde JSON
            abort(response()->json(['error' => 'No autenticado'], 401));
        }
    }
}
