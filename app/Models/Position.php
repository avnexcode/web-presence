<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Position extends Model
{
    use HasFactory;
    protected $table = 'positions';
    protected $primaryKey = 'id';

    public function users()
    {
        return $this->hasMany(User::class, 'position_id', 'id');
    }

    public function admins()
    {
        return $this->hasMany(Admin::class, 'position_id', 'id');
    }

    public function staff()
    {
        return $this->hasMany(Staff::class, 'position_id', 'id');
    }
}
