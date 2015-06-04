r = require('rethinkdb')

/* r.connect({ host: 'localhost', port: 28015 }, function(err, conn) {
  if(err) throw err;
  r.db('test').tableCreate('tv_shows').run(conn, function(err, res) {
    if(err) throw err;
    console.log(res);
    r.table('tv_shows').insert({ name: 'Star Trek TNG' }).run(conn, function(err, res)
    {
      if(err) throw err;
      console.log(res);
    });
  });
}); */

r.connect({ host: 'localhost', port: 28015, db: 'permaculture' }, function(err, conn) {
	if (err) throw err;
				
	/* r.dbCreate('permaculture').run(conn, function(err, res) {
		if (err) throw err;
		console.log(res);
	
	r.db('permaculture').tableCreate('venues').run(conn, function(err, res) {
		if (err) throw err;
		console.log(res); */
		
	r.table('venues').insert([{ 
		name: 'Vic\'s', address: 'Great Jones Street'},
		 { name: 'Rosie\'s', address: 'E. 2nd Street' 
		 }]).run(conn, function(err, res)
		{
		if(err) throw err;
		console.log(res);
	});
			
	r.table('venues').run(conn, function(err, cursor) {
		if (err) throw err;
		cursor.toArray(function(err, result) {
			console.log(JSON.stringify(result,null, 2));

				});
			});
		
		
		
		
