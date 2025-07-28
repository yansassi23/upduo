export const HEROES = [
  'Aamon', 'Akai', 'Aldous', 'Alice', 'Alpha', 'Alucard', 'Angela', 'Argus', 'Atlas', 'Aulus',
  'Aurora', 'Badang', 'Balmond', 'Bane', 'Barats', 'Baxia', 'Beatrix', 'Belerick', 'Benedetta', 'Bruno',
  'Brody', 'Carmilla', 'Cecilion', 'Chang\'e', 'Chou', 'Claude', 'Clint', 'Cyclops', 'Diggie', 'Dyrroth',
  'Edith', 'Esmeralda', 'Estes', 'Eudora', 'Fanny', 'Faramis', 'Floryn', 'Franco', 'Fredrinn', 'Freya',
  'Gatotkaca', 'Gloo', 'Gord', 'Granger', 'Grock', 'Guinevere', 'Gusion', 'Hanabi', 'Hanzo', 'Harith',
  'Harley', 'Hayabusa', 'Helcurt', 'Hilda', 'Hylos', 'Irithel', 'Jawhead', 'Johnson', 'Joy', 'Kagura',
  'Kaja', 'Karina', 'Karrie', 'Khaleed', 'Khufra', 'Kimmy', 'Lancelot', 'Lapu-Lapu', 'Layla', 'Leomord',
  'Lesley', 'Ling', 'Lolita', 'Lunox', 'Luo Yi', 'Lylia', 'Masha', 'Mathilda', 'Melissa', 'Minotaur',
  'Minsitthar', 'Miya', 'Moskov', 'Nana', 'Natalia', 'Natan', 'Odette', 'Paquito', 'Pharsa',
  'Phoveus', 'Popol and Kupa', 'Rafaela', 'Roger', 'Ruby', 'Saber', 'Selena', 'Silvanna', 'Sun', 'Terizla',
  'Thamuz', 'Tigreal', 'Uranus', 'Vale', 'Valir', 'Vexana', 'Wanwan', 'X.Borg', 'Xavier', 'Yi Sun-shin',
  'Yin', 'Yu Zhong', 'Yve', 'Zhask', 'Zilong'
]

export const RANKS = [
  'Warrior', 'Elite', 'Master', 'Grandmaster', 'Epic', 'Legend', 'Mythic', 'Mythical Glory'
]

export const LINES = [
  'exp', 'jungle', 'mid', 'gold', 'roam'
]

export const getHeroImageUrl = (heroName: string) => {
  // Handle specific cases with exact URLs you provided
  switch (heroName) {
    case 'Lapu-Lapu':
      return 'https://upduo.top/img/hero/Lapu_lapu.webp'
    case 'Luo Yi':
      return 'https://upduo.top/img/hero/Luo_Yi.webp'
    case 'Paquito':
      return 'https://upduo.top/img/hero/Paquito.webp'
    case 'Popol and Kupa':
      return 'https://upduo.top/img/hero/Popol_and_kupa.webp'
    case 'X.Borg':
      return 'https://upduo.top/img/hero/X_Borg.webp'
    case 'Yi Sun-shin':
      return 'https://upduo.top/img/hero/Yi_Sun_shin.webp'
    case 'Yu Zhong':
      return 'https://upduo.top/img/hero/Yu_zhong.webp'
    default:
      // Default behavior for all other heroes
      return `https://upduo.top/img/hero/${heroName}.webp`
  }
}

export const getRankImageUrl = (rank: string) => {
  // Handle specific cases with exact URLs you provided
  switch (rank) {
    case 'Warrior':
      return 'https://upduo.top/img/rank/warrior.webp'
    case 'Mythic':
      return 'https://upduo.top/img/rank/mythic.webp'
    case 'Mythical Glory':
      return 'https://upduo.top/img/rank/mythical_glory.webp'
    default:
      // Default behavior for all other ranks
      return `https://upduo.top/img/rank/${rank}.webp`
  }
}

export const getLineImageUrl = (line: string) => {
  // Handle specific case with exact URL you provided
  if (line === 'roam') {
    return 'https://upduo.top/img/line/Roam.webp'
  }
  
  // Default behavior for all other lines
  return `https://upduo.top/img/line/${line}.webp`
}