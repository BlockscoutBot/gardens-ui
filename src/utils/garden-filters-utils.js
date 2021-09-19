export const NETWORK_FILTER_RINKEBY = 0
export const NETWORK_FILTER_XDAI = 1
export const SORTING_FILTER_LIQUIDITY = 0
export const SORTING_FILTER_MEMBERS = 1
export const SORTING_FILTER_PROPOSALS_COUNTER = 2

export const FILTER_KEY_NAME = 'name'
export const FILTER_KEY_NETWORK = 'network'
export const FILTER_KEY_SORTING = 'sorting'

export const SORTING_ITEMS = [
  'More Liquidity',
  'More Members',
  'More Proposals',
]
export const NETWORK_ITEMS = ['Rinkeby', 'xDai']

export const filterArgsMapping = {
  [FILTER_KEY_NAME]: {
    queryKey: '',
  },
  [FILTER_KEY_NETWORK]: {
    queryKey: 'network',
    [NETWORK_FILTER_XDAI]: 100,
    [NETWORK_FILTER_RINKEBY]: 4,
  },
  [FILTER_KEY_SORTING]: {
    queryKey: 'orderBy',
    [SORTING_FILTER_LIQUIDITY]: 'honeyLiquidity',
    [SORTING_FILTER_MEMBERS]: 'supporterCount',
    [SORTING_FILTER_PROPOSALS_COUNTER]: 'proposalCount',
  },
}

export const testNameFilter = (filterName, garden) => {
  return garden.name && garden.name.includes(filterName)
}
