<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckRole
{
    public function handle(Request $request, Closure $next, $role)
    {
        $user = $request->user();

        // Si no hay usuario autenticado o no tiene el rol, aborta
        if (!$user || !$user->is_admin) {
            return response()->json(['error' => 'No autorizado'], 403);
        }

        return $next($request);
    }
}
