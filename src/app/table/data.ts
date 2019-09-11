export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }
  const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 12, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 13, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 14, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 15, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 16, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 17, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 18, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 19, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 20, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 21, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 22, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 23, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 24, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 25, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 26, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 27, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 28, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 29, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 30, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 31, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 32, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 33, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 34, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 35, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 36, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 37, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 38, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 39, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 40, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 41, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
    {position: 42, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
    {position: 43, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
    {position: 44, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
    {position: 45, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
    {position: 46, name: 'Sulfur', weight: 32.065, symbol: 'S'},
    {position: 47, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
    {position: 48, name: 'Argon', weight: 39.948, symbol: 'Ar'},
    {position: 49, name: 'Potassium', weight: 39.0983, symbol: 'K'},
    {position: 50, name: 'Calcium', weight: 40.078, symbol: 'Ca'}
      
  ];

  export class DataProvider{
    public static  Data=ELEMENT_DATA;
  }
