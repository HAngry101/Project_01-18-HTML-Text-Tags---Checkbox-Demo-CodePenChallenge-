function s() {
    var e = document.getElementsByTagName("input");
    document.getElementById("demo").innerHTML = 
        (e[0].checked ? '<a href="">' : "") +
        (e[1].checked ? '<abbr title="Demonstration">' : "") +
        (e[2].checked ? "<b>" : "") +
        (e[3].checked ? '<blockquote cite="">' : "") +
        (e[4].checked ? "<code>" : "") +
        (e[5].checked ? "<del>" : "") +
        (e[6].checked ? "<ins>" : "") +
        (e[7].checked ? "<em>" : "") +
        (e[8].checked ? "<h1>" : "") +
        (e[9].checked ? "<i>" : "") +
        (e[10].checked ? "<mark>" : "") +
        (e[11].checked ? "<pre>" : "") +
        (e[12].checked ? "<s>" : "") +
        (e[13].checked ? "<samp>" : "") +
        (e[14].checked ? "<small>" : "") +
        (e[15].checked ? "<strong>" : "") +
        (e[16].checked ? "<sup>" : "") +
        (e[17].checked ? "<sub>" : "") +
        "Demo Text" +
        (e[17].checked ? "</sub>" : "") +
        (e[16].checked ? "</sup>" : "") +
        (e[15].checked ? "</strong>" : "") +
        (e[14].checked ? "</small>" : "") +
        (e[13].checked ? "</samp>" : "") +
        (e[12].checked ? "</s>" : "") +
        (e[11].checked ? "</pre>" : "") +
        (e[10].checked ? "</mark>" : "") +
        (e[9].checked ? "</i>" : "") +
        (e[8].checked ? "</h1>" : "") +
        (e[7].checked ? "</em>" : "") +
        (e[6].checked ? "</ins>" : "") +
        (e[5].checked ? "</del>" : "") +
        (e[4].checked ? "</code>" : "") +
        (e[3].checked ? "</blockquote>" : "") +
        (e[2].checked ? "</b>" : "") +
        (e[1].checked ? "</abbr>" : "") +
        (e[0].checked ? "</a>" : "");
    document.getElementById("console").innerHTML = document.getElementById(
        "demo"
    ).innerHTML;

}

s()
