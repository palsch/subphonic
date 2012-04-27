
function generateAlbumHeaderHTML() {
    var html;
    html = '<tr><th></th><th></th><th>'+language['album']+'</th><th>'+language['artist']+'</th></tr>';
    return html;
}
function generateAlbumHTML(rowcolor, childid, parentid, coverart, title, artist, rating) {
    var html;
    html = '<tr class=\"album ' + rowcolor + '\" childid=\"' + childid + '\" parentid=\"' + parentid + '\" userrating=\"' + rating + '\">';
    html += '<td class=\"itemactions\"><a class=\"add\" href=\"\" title=\"'+language['tAddToCurrentPlaylist']+'\"></a>';
    html += '<a class=\"play\" href=\"\" title=\"'+language['tPlay']+'\"></a>';
    html += '<a class=\"download\" href=\"\" title=\"'+language['tDownload']+'\"></a>';
    if (rating === 5) {
        html += '<a class=\"favorite\" href=\"\" title=\"'+language['tFavorite']+'\"></a>';
    } else {
        html += '<a class=\"rate\" href=\"\" title=\"'+language['tAddToFavorite']+'\"></a>';
    }
    html += '</td>';
    html += '<td class=\"albumart\"><img src=\"' + baseURL + '/getCoverArt.view?v=' + version + '&c=' + applicationName + '&f=jsonp&size=50&id=' + coverart + '\" /></td>';
    html += '<td class=\"album\">' + title + '</td>';
    html += '<td class=\"artist\">' + artist + '</td>';
    html += '</tr>';
    return html;
}

function generateAlbumHeaderHTMLHead() {
    var html;
    html = '<tr><th></th><th></th><th>'+language['album']+'</th><th>'+language['artist']+'</th><th>'+language['typeAlbum']+'</th></tr>';
    return html;
}
function generateAlbumHTMLHead(status, childid, parentid,title, artist, coverart,type) {
    var html;
    var rowcolor = 'odd';
    if(status == 'Downloaded'){
        rowcolor = 'green';
    }
    if(status == 'Skipped'){
        rowcolor = 'blue';
    }
    if(status == 'Wanted'){
        rowcolor = 'red';
    }
    if(status == 'Snatched'){
        rowcolor = 'purple';
    }
    html = '<tr class=\"albumHead ' + rowcolor + '\" childid=\"' + childid + '\" parentid=\"' + parentid + '\">';
    html += '<td class=\"itemactions\">';
    if(status != 'Downloaded'){
        html += '<a class=\"want\" href=\"\" title=\"'+language['tDownload']+'\"></a>';
    }
    html += '</td>';
    html += '<td class=\"albumart\"><img src=\"http://ec1.images-amazon.com/images/P/'+coverart+'.01.jpg\" height=60 width=60 /></td>';
    html += '<td class=\"album\">' + title + '</td>';
    html += '<td class=\"artist\">' + artist + '</td>';
    html += '<td class=\"type\">' + type + '</td>';
    html += '</tr>';
    return html;
}


function generateArtistHeaderHTML() {
    var html;
    html = '<tr><th></th><th>'+language['artist']+'</th></tr>';
    return html;
}
function generateArtistHTML(rowcolor, childid, artist) {
    var html;
    html = '<tr class=\"artist ' + rowcolor + '\" childid=\"' + childid +'\">';
    html += '<td></td>';
    html += '<td class=\"artist\">' + artist + '</td>';
    html += '</tr>';
    return html;
}

function generateSongHeaderHTML() {
    var html;
    html = '<tr><th></th><th>'+language['track']+'</th><th>'+language['title']+'</th><th>'+language['artist']+'</th><th>'+language['album']+'</th><th class=\"alignright\">'+language['time']+'</th></tr>';
    return html;
}
function generateSongHTML(rowcolor, childid, parentid, track, title, artist, album, coverart, rating, m, s) {    
    pos = parentid.lastIndexOf('2f');
    if(pos != 1){
        artistid = parentid.substring(0, pos)
    }else{
        artistid = -1;
    }
    
    if(artistid == rootdirectoryid){
        artistid = parentid;
    }
   
    var html;
    if(track == '-'){
        html = '<tr class=\"album ' + rowcolor + '\" childid=\"' + childid + '\" parentid=\"' + parentid + '\" userrating=\"' + rating + '\">';
    }else{
        html = '<tr class=\"song ' + rowcolor + '\" childid=\"' + childid + '\" parentid=\"' + parentid + '\" userrating=\"' + rating + '\">';
    }
    
    html += '<td class=\"itemactions\"><a class=\"add\" href=\"\" title=\"'+language['tAddToCurrentPlaylist']+'\"></a>';
    html += '<a class=\"remove\" href=\"\" title=\"'+language['tRemove']+'\"></a>';
    html += '<a class=\"play\" href=\"\" title=\"'+language['tPlay']+'\"></a>';
    html += '<a class=\"download\" href=\"\" title=\"'+language['tDownload']+'\"></a>';
    if (rating === 5) {
        html += '<a class=\"favorite\" href=\"\" title=\"'+language['tFavorite']+'"></a>';
    } else {
        html += '<a class=\"rate\" href=\"\" title=\"'+language['tAddToFavorite']+'\"></a>';
    }
    html += '</td>';
    html += '<td class=\"track\">' + track + '</td>';
    html += '<td class=\"title\">' + title + '</td>';
    if(artistid!=-1){
        html += '<td class=\"artist\"><a href="javascript:getAlbums(\''+artistid+'\',\'\',\'#AlbumRows\')">' + artist + '</a></td>';
    }else{
        html += '<td class=\"artist\">' + artist + '</td>';
    }
    html += '<td class=\"album\"><a href="javascript:getAlbums(\''+parentid+'\',\'\',\'#AlbumRows\')">' + album + '<img src=\"' + baseURL + '/getCoverArt.view?v=' + version + '&c=' + applicationName + '&f=jsonp&size=25&id=' + coverart + '\" /></a></td>';
    if(m != '' || s!=''){
        html += '<td class=\"time\">' + m + ':' + s + '</td>';
    }else{
        html += '<td class=\"time\"></td>';
    }
    html += '</tr>';
    return html;
}
function generateSongHTMLHead(rowcolor, parentid, track, title, artist, album, coverart, m, s) {
    var html;
    if(track.Location != 'null'){
        rowcolor = 'green';
    }else{
        rowcolor = 'red';
    }
    html = '<tr class=\"songHead ' + rowcolor + '\" parentid=\"' + parentid + '\">';
    html += '<td></td>';
    html += '<td class=\"track\">' + track + '</td>';
    html += '<td class=\"title\">' + title + '</td>';
    html += '<td class=\"artist\"><a href="javascript:getArtistHead(\''+parentid+'\',\'\',\'#AlbumRows\')">' + artist + '</a></td>';
    html += '<td class=\"album\">' + album + '<img src=\"http://ec1.images-amazon.com/images/P/'+coverart+'.01.jpg\" height=25 width=25 /></td>';
    if(m != '' || s!=''){
        html += '<td class=\"time\">' + m + ':' + s + '</td>';
    }else{
        html += '<td class=\"time\"></td>';
    }
    html += '</tr>';
    return html;
}

function emptyAll(){
    $("#ArtistHeader").empty();
    $("#ArtistRows").empty();
    $("#AlbumRows").empty();
    $("#AlbumHeader").empty();
    $("#SongHeader").empty();
    $("#SongRows").empty();
}

function updateCssContainer(){
    if ($('#ArtistRows').html()){
        $('#ArtistSearchContainer').show();
    }else{
        $('#ArtistSearchContainer').hide();
    }
    
    if ($('#AlbumRows').html()){
        $('#AlbumContainer').show();
    }else{
        $('#AlbumContainer').hide();
    }
}

function emptyAllHead(){
    $("#ArtistHeaderHead").empty();
    $("#ArtistRowsHead").empty();
    $("#AlbumRowsHead").empty();
    $("#AlbumHeaderHead").empty();
    $("#SongHeaderHead").empty();
    $("#SongRowsHead").empty();
}

function updateCssContainerHead(){
    if ($('#ArtistRowsHead').html()){
        $('#ArtistSearchHead').show();
    }else{
        $('#ArtistSearchHead').hide();
    }
    
    if ($('#AlbumRowsHead').html()){
        $('#AlbumContainerHead').show();
    }else{
        $('#AlbumContainerHead').hide();
    }
}


function refreshRowColor() {
    $.each($('table.songlist tr.song'), function (i) {
        $(this).removeClass('even odd');
        var rowcolor;
        if (i % 2 === 0) {
            rowcolor = 'even';
        } else {
            rowcolor = 'odd';
        }
        $(this).addClass(rowcolor);
    });
}