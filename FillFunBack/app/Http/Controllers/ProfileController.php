<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class ProfileController extends Controller
{
    /**
     * Fetch user profile data.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function getProfile()
    {
        $user = User::find(1);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        // Return user data
        return response()->json([
            'name' => $user->name,
            'email' => $user->email,
            'password' => $user->password,
        ]);
    }
}
