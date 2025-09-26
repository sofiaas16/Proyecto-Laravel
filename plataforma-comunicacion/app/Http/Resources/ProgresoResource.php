<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProgresoResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'leccion_id' => $this->leccion_id,
            'usuario_id' => $this->user_id,
            'fecha_completado' => $this->created_at->format('Y-m-d H:i:s'),
            'leccion' => new LeccionResource($this->whenLoaded('leccion')),
        ];
    }
}
