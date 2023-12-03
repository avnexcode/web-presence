<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Position extends Model
{
    use HasFactory;
    protected $table = 'positions';
    protected $primaryKey = 'id';

    // protected $with = ['admins', 'users', 'staff'];

    public function users()
    {
      return $this->belongsToMany(User::class, 'user_positions', 'position_id', 'user_nik');
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
