import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.red,
          title: Text('AKbar maulana | 43E57027205001'),
        ),
        body: Center(
          child: Column(
            children: [
              
              ListTile(
                tileColor: Colors.green,
                title: Text('Susan',
                style: TextStyle(color: Colors.white),),
                subtitle: Text('Deskripsi List Tile 1',
                style: TextStyle(color: Colors.white),),
                leading: Container(
                width: 48,
                height: 48,
                decoration: BoxDecoration(
                 border: Border.all(
                    color: Colors.red,
                    width: 1.0,
                 )
                ),
                child: Image.asset(
                  'assets/susanti.png',
                  fit: BoxFit.cover,
                ),
              ),
                onTap: () {
                  
                },
              ),
             ListTile(
                tileColor: Colors.red,
                title: Text('Dora',
                style: TextStyle(color: Colors.white),),
                subtitle: Text('Deskripsi List Tile 2',
                style: TextStyle(color: Colors.white),),
                leading: Container(
                width: 48,
                height: 48,
                decoration: BoxDecoration(
                 border: Border.all(
                    color: Colors.blue,
                    width: 1.0,
                 )
                ),
                child: Image.asset(
                  'assets/doraemon.png',
                  fit: BoxFit.cover,
                ),
              ),
                onTap: () {
                  
                },
              ),
              ListTile(
                tileColor: Colors.green,
                title: Text('Mas Elon',
                style: TextStyle(color: Colors.white),),
                subtitle: Text('Deskripsi List Tile 3',
                style: TextStyle(color: Colors.white),),
                leading: Container(
                width: 48,
                height: 48,
                decoration: BoxDecoration(
                 border: Border.all(
                    color: Colors.red,
                    width: 1.0,
                 )
                ),
                child: Image.asset(
                  'assets/elon.png',
                  fit: BoxFit.cover,
                ),
              ),
                onTap: () {
                  
                },
              ),
               ListTile(
                tileColor: Colors.red,
                title: Text('Reza',
                style: TextStyle(color: Colors.white),),
                subtitle: Text('Deskripsi List Tile 4',
                style: TextStyle(color: Colors.white),),
                leading: Container(
                width: 48,
                height: 48,
                decoration: BoxDecoration(
                 border: Border.all(
                    color: Colors.blue,
                    width: 1.0,
                 )
                ),
                child: Image.asset(
                  'assets/reza.png',
                  fit: BoxFit.cover,
                ),
              ),
                onTap: () {
                  
                },
              ),
              ListTile(
                tileColor: Colors.green,
                title: Text('Maudy',
                style: TextStyle(color: Colors.white),),
                subtitle: Text('Deskripsi List Tile 5',
                style: TextStyle(color: Colors.white),),
                leading: Container(
                width: 48,
                height: 48,
                decoration: BoxDecoration(
                 border: Border.all(
                    color: Colors.red,
                    width: 1.0,
                 )
                ),
                child: Image.asset(
                  'assets/maudy.png',
                  fit: BoxFit.cover,
                ),
              ),
                onTap: () {
                  
                },
              ),
              Container(
                width: 100,
                height: 100,
                decoration: BoxDecoration(
                  border: Border.all(
                    color: Colors.red,
                    width: 2.0,
                  ),
                )
              ),
            ],
          ),
        ),
      ),
    );
  }
}
