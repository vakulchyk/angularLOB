(function() {
    angular
        .module("productManagement")
        .controller(
            "ProductListCtrl", 
            ["productResource", 
            ProductListCtrl]);

    function ProductListCtrl(productResource) {
        var vm = this;
        console.log(vm);

        productResource.query(function(data) {
            console.log(data);
            vm.products = data;
        })

        vm.showImage = false;
        vm.toggleImage = function() {
            vm.showImage = !vm.showImage;
        } 
    }

}());