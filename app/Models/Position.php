<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Position extends Model
{
    use HasFactory;
    protected $table = 'positions';
    protected $primaryKey = 'id';

    public function admin() {
        return $this->hasMany(Admin::class);
    }
    public function manager() {
        return $this->hasMany(Manager::class);
    }
    public function staff() {
        return $this->hasMany(Staff::class);
    }
}
