#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <tingyunApp/NBSAppAgent.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"tingyun_demo";

  BOOL result = [super application:application didFinishLaunchingWithOptions:launchOptions];
  UIViewController *main = self.window.rootViewController;
  UINavigationController *rootViewController = [UINavigationController new];
  rootViewController.navigationBarHidden = YES;
  self.window.rootViewController = rootViewController;
  [rootViewController pushViewController:main animated:NO];
  [self.window makeKeyAndVisible];
  return result;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

/// This method controls whether the `concurrentRoot`feature of React18 is turned on or off.
///
/// @see: https://reactjs.org/blog/2022/03/29/react-v18.html
/// @note: This requires to be rendering on Fabric (i.e. on the New Architecture).
/// @return: `true` if the `concurrentRoot` feature is enabled. Otherwise, it returns `false`.
- (BOOL)concurrentRootEnabled
{
  return true;
}

@end
