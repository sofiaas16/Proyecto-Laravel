<?php

namespace App\Strategies\CardFilters;

use Illuminate\Database\Eloquent\Builder;

class KeyPhraseFilter implements CardFilterStrategy
{
    public function apply(Builder $query, $value): Builder
    {
        return $query->where('key_phrase', 'like', "%$value%");
    }
}