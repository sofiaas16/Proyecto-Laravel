<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class LeccionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     */
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'titulo' => $this->titulo,
            'contenido' => $this->contenido,
            'creada_el' => $this->created_at->format('Y-m-d H:i:s'),
            'actualizada_el' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
