export const coffeEspecial = {
    tipo: "Café de Origen",
    region: "Quindío - Circasia",
    sabor: "Afrutado, Chocolate Negro, Frutos Secos",
    fragancia: "Afrutada, Chocolate Negro, Cacao y Mantequilla de Maní",
    aroma: "Afrutada, Chocolate Negro, Cacao y Mantequilla de Maní",
    acidez: "Brillante",
    cuerpo: "Denso",
    altura: "1800 m.s.n.m",
    tostion: "Media",
    imagen: function renderPokeball(){
        return (
          <Image 
            source={require('../assets/coffe/cafe_especial.png')}
            style={{width: 75, height: 75, top: -15}}
          />
      
        )}
}