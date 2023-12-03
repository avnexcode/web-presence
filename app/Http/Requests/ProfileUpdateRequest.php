<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    // , Rule::unique(User::class)->ignore($this->user()->id)
    public function rules(): array
    {
        return [
            'name' => [
                'required', 
                'string', 
                'max:255'],
            'email' => [
                'required', 
                'string', 
                'lowercase', 
                'email', 
                'max:255', 
                Rule::unique(User::class)->ignore($this->user()->nik)],
            // no hp
            'phone' => [
                'nullable',
                'max:255', 
                Rule::unique(User::class)->ignore($this->user()->nik)],
        ];
    }
    public function messages(): array
{
    return [
        'email.unique' => 'Alamat email sudah digunakan oleh staff lain.',
        'phone.unique' => 'Nomor HP sudah digunakan oleh staff lain.',
    ];
}
}
