var checkboxes = document.querySelectorAll('.item-checkbox');
var item_labels = document.querySelectorAll('.item-close');
var check = false;
var toggl =  document.querySelector(".toggle");
var menu_box = document.querySelector(".menu_box");
var active = "active";

//console.log(item_labels);
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', function () {
    const label = this.nextElementSibling;
    console.log(this)
    if (this.checked) {
      label.style.textDecoration = 'line-through';
    } else {
      label.style.textDecoration = 'none';
    }
    });
});

item_labels.forEach((item_label) => {
  item_label.addEventListener('click', () => {
    const label = item_label.previousElementSibling;
    console.log(item_label.previousElementSibling);
    check =  !check;
    if(check){
      label.style.textDecoration = 'line-through';
      item_label.innerHTML= "-";
    }
    else{
      label.style.textDecoration = 'none';
      item_label.innerHTML= "X";
    }
});
});

toggl.onclick = function(){
  menu_box.classList.toggle("active");
  if(menu_box.classList.contains(active)){
    toggl.classList.remove("fa-bars");
    toggl.classList.add("fa-circle-xmark");
  }
  else{
    toggl.setAttribute("aria-expanded",false)
    toggl.classList.remove("fa-circle-xmark");
    toggl.classList.add("fa-bars");
  }
}