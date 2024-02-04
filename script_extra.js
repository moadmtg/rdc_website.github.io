document.addEventListener('DOMContentLoaded', (event) => {

    document.querySelectorAll('.zoom-icon').forEach(zoomIcon => {
        zoomIcon.addEventListener('click', (event) => {
            let imgToZoom = zoomIcon.previousElementSibling;


            const expandedView = document.createElement('div');
            expandedView.id = 'expanded-view';
            expandedView.style.position = 'fixed';
            expandedView.style.left = '0';
            expandedView.style.top = '0';
            expandedView.style.width = '100%';
            expandedView.style.height = '100%';
            expandedView.style.backgroundColor = 'rgba(0,0,0,0.8)';
            expandedView.style.zIndex = '1000';
            expandedView.style.cursor = 'pointer';
            expandedView.style.display = 'flex';
            expandedView.style.justifyContent = 'center';
            expandedView.style.alignItems = 'center';
            
  
            const img = document.createElement('img');
            img.src = imgToZoom.src;
            img.style.maxWidth = '90%';
            img.style.maxHeight = '90%';
            img.style.boxShadow = '0 0 20px rgba(0,0,0,0.5)';
            expandedView.appendChild(img);


            expandedView.addEventListener('click', () => {
                expandedView.remove();
            });


            document.body.appendChild(expandedView);


            event.stopPropagation();
        });
    });
});
