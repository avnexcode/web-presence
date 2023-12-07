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
                'max:255'
            ],
            'email' => [
                'required',
                'string',
                'lowercase',
                'email:dns',
                'max:255',
                Rule::unique(User::class)->ignore($this->user()->nik)
            ],
            // no hp
            'phone' => [
                'nullable',
                'max:255',
                Rule::unique(User::class)->ignore($this->user()->nik)
            ],
            'address' => [
                'nullable',
                'max:255'
            ],
            'gender' => [
                'nullable',
                'max:255'
            ],
            'old' => [
                'nullable',
                'max:255'
            ],
        ];
    }
    public function messages(): array
    {
        return [
            'name.required' => 'Kolom nama harus diisi.',
            'email.required' => 'Kolom email harus diisi.',
            'email.unique' => 'Alamat email sudah digunakan oleh staff lain.',
            'email.dns' => 'Format email tidak sesuai.',
            'phone.unique' => 'Nomor HP sudah digunakan oleh staff lain.',
        ];
    }
}
