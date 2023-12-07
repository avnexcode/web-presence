<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AttendanceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'user_nik' => $this->whenLoaded('user'),
            'presensi' => $this->presensi,
            'date' => $this->date,
            'time' => $this->time,
        ];
    }
    
}
