function setTemplate(template_name, data){
	var html=template_name(data)

	$("#content").html(html)
}

$(document).ready(function(){
	var source=$("#showcase_view").html()

	var showcase_template=Handlebars.compile(source)

	source=$("#usage_view").html()

	var usage_template=Handlebars.compile(source)

	source=$("#gallery_view").html()

	var gallery_template=Handlebars.compile(source)

	source=$("#contact_view").html()

	var contact_template=Handlebars.compile(source)

	var html=showcase_template(data_showcase)

	$("#block_1").html(html)

	var html=usage_template(data_usage)

	$("#block_2").html(html)

	var html=gallery_template(data_gallery)

	$("#block_3").html(html)

	var html=contact_template(data_contact)

	$("#block_4").html(html)

	source=$("#big_view").html()

	var image_template=Handlebars.compile(source)

	setTemplate(image_template, data_gallery.photos[0])

	$("#image_id").click(function(){
		index=$(this).data('id')

		setTemplate(image_template, data_gallery[index])
	})

	function scroll(tab,block){
		$(tab).click(function() {
		  $('html, body').animate({
		    scrollTop: $(block).offset().top
		  }, 500);
		});
	};

	scroll("#home_tab","#block_1")

	scroll("#usage_tab","#block_2")

	scroll("#gallery_tab","#block_3")

	scroll("#contact_tab","#block_4")
});