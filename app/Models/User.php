<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\Admin;
use App\Models\Staff;
use Illuminate\Support\Manager;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'users';
    protected $primaryKey = 'nik';
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nik',
        'name',
        'email',
        'address',
        'phone',
        'gender',
        'old',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    protected $guarded = ['nik'];
    protected $with = ['positions', 'positions.admins', 'positions.staff'];
    protected static function boot()
    {
        parent::boot();
        static::deleting(function ($user) {
            $user->positions()->detach();
        });
    }
    public function positions() 
    {
      return $this->belongsToMany(Position::class, 'user_positions', 'user_nik', 'position_id');
    }
    
    public function attendances()
    {
        return $this->hasMany(Attendance::class, 'user_nik', 'nik');
    }


    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? false, fn ($query, $search) =>
        $query->where('nik', 'like', "%$search%")
            ->orWhere('email', 'like', "%$search%")
            ->orWhere('name', 'like', "%$search%"));
    }
}
