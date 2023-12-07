<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Http\Resources\AttendanceResource;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // AttendanceResource::withoutWrapping();
    }
}
