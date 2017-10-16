
$(document).ready(function() {
	$('.LeftBarLabel').click(function(e) {
		var id = e.currentTarget.id;
		$.get('http://10.14.41.20:8081/api/labels/'+id, function(data, status){
			console.log(data)
			$('.CurrentLabelName').html(data.name);
			for(var i = 0; i < 10; i++) {
				$('.CurrentLabelRelations').children().eq(i).html(data.relations[i].name);
				$('.CurrentLabelRelations').children().eq(i).attr('id', data.relations[i].id);
			}
		})
	})

	$('.CurrentLabelRelationsName').click(function(e) {
		var id = e.currentTarget.id;
		$.get('http://10.14.41.20:8081/api/labels/'+id, function(data, status){
			console.log(data)
			$('.CurrentLabelName').html(data.name);
			for(var i = 0; i < 10; i++) {
				$('.CurrentLabelRelations').children().eq(i).html(data.relations[i].name);
				$('.CurrentLabelRelations').children().eq(i).attr('id', data.relations[i].id);
			}
		})
	})
})
