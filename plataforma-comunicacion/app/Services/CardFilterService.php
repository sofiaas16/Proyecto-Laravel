<?php
namespace App\Services;

use Illuminate\Database\Eloquent\Builder;
use App\Strategies\CardFilters\MethodFilter;
use App\Strategies\CardFilters\KeyPhraseFilter;

class CardFilterService
{
    protected $filters = [
        'method' => MethodFilter::class,
        'key_phrase' => KeyPhraseFilter::class,
    ];

    public function applyFilters(Builder $query, array $params): Builder
    {
        foreach ($params as $key => $value) {
            if (isset($this->filters[$key])) {
                $strategy = new $this->filters[$key];
                $query = $strategy->apply($query, $value);
            }
        }
        return $query;
    }
}