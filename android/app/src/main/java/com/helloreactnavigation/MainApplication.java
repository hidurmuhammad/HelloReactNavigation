package com.helloreactnavigation;

import android.app.Application;

import androidx.multidex.MultiDexApplication;

import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactNativeHost;
import com.facebook.soloader.SoLoader;
import java.util.List;
import com.facebook.react.bridge.JSIModulePackage; // <- add
//import com.swmansion.reanimated.ReanimatedJSIModulePackage; // <- add
//import com.reactlibrary.RNConfigReaderPackage;
import com.swmansion.reanimated.ReanimatedPackage;

public class MainApplication extends MultiDexApplication implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new DefaultReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
       // List<ReactPackage> packages = new RNConfigReaderPackage(this).getPackages();
        //List<ReactPackage> packages = new ReanimatedPackage(this).getPackages();// <-- add this line
      
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // packages.add(new MyReactNativePackage());
          return packages;
          
        } 
        //  @Override
        // protected list<ReactPackage> getpackages() {
        //   List<ReactPackage> packages = new ReanimatedPackage(this).getPackages();
        //   return packages;
        // }
        
        @Override
        protected String getJSMainModuleName() {
          return "index";
        }

        @Override
        protected boolean isNewArchEnabled() {
          return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
        }

        @Override
        protected Boolean isHermesEnabled() {
          return BuildConfig.IS_HERMES_ENABLED;
        }

        // @Override
        // protected JSIModulePackage getJSIModulePackage() {
        //   return new ReanimatedJSIModulePackage(); // <- add
        // }
        
      };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      // If you opted-in for the New Architecture, we load the native entry point for this app.
      DefaultNewArchitectureEntryPoint.load();
    }
    ReactNativeFlipper.initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
  }
}
