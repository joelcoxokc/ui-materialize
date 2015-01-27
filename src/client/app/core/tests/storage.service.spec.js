/* global inject:false, beforeEach:false, describe:false, xdescribe:false, it:false, xit:false, expect:false */
describe('$storage', function() {
    var $storage, $window, value, obj;
    var $scope, $rootScope, sync, mainScope, childScope, testValue, testObj;

    testValue = 'one';
    testObj   = { one:'1' , two:{three:'3',four:'4'} };
    sync      = { first:'John' , last:'doe' };

    beforeEach(module('app'));
    beforeEach(module('core'));

    xdescribe('$storage service', function() {
        beforeEach(inject(function($injector, $controller) {
            $storage = $injector.get('$storage');
            $window = $injector.get('$window');
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();   }));
        it('Should have a get and a set method', function() {
            expect($storage.get).to.be.a('function');
            expect($storage.set).to.be.a('function');
            expect($storage.remove).to.be.a('function');
            expect($storage.reset).to.be.a('function');
            expect($storage.sync).to.be.a('function');   });
        it('Should Store values in localStorage', function() {
            var thing, value;
            thing     = $storage.set('thing', {});
            thing.one = 1;

            thing.save();

            value = JSON.parse(localStorage.getItem('thing'));
            expect(value.one).to.be(1);   });
        it('Should Store objects in localStorage', function() {
            var storedObject, obj;
            storedObject = $storage.set('object');
            storedObject.person = {};
            storedObject.person.first = 'John';
            storedObject.person.last = 'Doe';
            storedObject.save();
            obj          = JSON.parse(localStorage.getItem('object'));
            expect(obj.person.first + ' ' + obj.person.last).to.be('John Doe');   });
        it('Should remove a specific key from storage', function() {
            var val = $storage.set('value');
            val.name = 'John Doe';
            val.save();

            var value;
            $storage.remove('value');
            value = localStorage.getItem('value');
            expect(value).to.be(undefined);   });
        it('Item should have a remove property', function() {
            var val = $storage.set('value');
            val.name = 'John Doe';
            val.save();
            expect(val.remove).to.be.a('function');   });
        it('Item should be able to remove itself', function() {
            var val      = $storage.set('value');
            val.name = 'John Doe';
            val.save();

            var value = JSON.parse(localStorage.getItem('value'));
            expect(val.name).to.be(value.name);

            val.remove();
            value = localStorage.getItem('value');
            expect(value).to.be(null);   });
      }); // end xdescrixe( function(){ ... });

    xdescribe('Service Sync', function() {
        var store, root;
        beforeEach(inject(function($injector, $controller, $rootScope) {
            $storage = $injector('$storage');
            console.log($storage);

            mainScope = $rootScope.$new();
            $controller('MainController', {$scope: mainScope, $storage:store});
            childScope = mainScope.$new();
            $controller('ChildController', {$scope: childScope, $storage:store});   }));
        xit('Should Sync with items on $scope', function() {
            // console.log(store);
            // store.sync(mainScope, 'person');
            mainScope.person.name = 'John Doe';
            mainScope.person.age = 23;

            // console.log(mainScope.person);
            // var value = localStorage.getItem('person');
            // console.log(value);
            expect(1).to.be(1);
            // expect(value).to.be('John Doe');
            // expect(value.age).to.be(23);
          });
        xit('Should Sync with unsyncronise changes', function() {
            mainScope.person = $storage.sync('person');
            mainScope.person.name = 'John Doe';
            console.log($scope.person);
            var value = localStorage.getItem('person');
            expect(value).to.be('John Doe');  });
      }); // end xdescribe( function(){ ... })

  });