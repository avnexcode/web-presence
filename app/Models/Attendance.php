<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attendance extends Model
{
    use HasFactory;

    protected $table = 'attendances';
    protected $primaryKey = 'id';
    protected $guarded = ["id"];
    protected $fillable = [
        'user_nik',
        'presensi',
        'date',
        'time'
    ];

    protected $with = ["user"];
    public function user()
    {
        return $this->belongsTo(User::class, 'user_nik', 'nik');
    }
    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? false, function ($query, $search) {
            $query->whereHas('user', function ($q) use ($search) {
                $q->where('name', 'like', "%$search%")
                    ->orWhere('nik', 'like', "%$search%")
                    ->orWhere('email', 'like', "%$search%");
            });

            $query->orWhere('date', 'like', "%$search%")
                ->orWhere('time', 'like', "%$search%");
        });
    }
}
